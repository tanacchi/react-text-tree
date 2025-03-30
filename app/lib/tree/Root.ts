type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Dot = '.';

// 数値またはピリオドの0回以上の繰り返しを表現する型
type DigitsOrDots<T extends string> =
  T extends `${Digit | Dot}${infer Rest}`
    ? DigitsOrDots<Rest>
    : T extends ''
      ? true
      : false;

// DotSeparatedNumbers型を定義
type DotSeparatedNumbers = `${Digit}${string}${Digit}`;

// 型チェック用のユーティリティ型
type IsValidDotSeparatedNumber<T extends string> =
  T extends `${Digit}${infer Middle}${Digit}`
    ? DigitsOrDots<Middle> extends true
      ? T
      : never
    : never;

class Root {
  private readonly rootNode: BulletPoint;

  constructor() {
    this.rootNode = BulletPoint.createRoot();
  }

  getByAddress(numbers: DotSeparatedNumbers): BulletPoint | null {
    const numberArray = numbers.split('.').map(Number);
    return this.get(...numberArray);
  }

  get(...numbers: number[]): BulletPoint | null {
    let currentNode: BulletPoint | null = this.rootNode;

    for (const number of numbers) {
      if (!currentNode) return null;
      const child: BulletPoint = currentNode.getChildren()[number];
      if (!child) return null;
      currentNode = child;
    }

    return currentNode;
  }
}

const root = new Root();
const bulletPoint = root.getByAddress('1.d.1');
