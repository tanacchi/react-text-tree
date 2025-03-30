type Id = string | number;

class BulletPoint {
  constructor(
    private readonly id: Id,
    private text: string,
    private expanded: boolean,
    private index: number,
    private parentId: Id | null,
    private children: BulletPoint[] = []
  ) {}

  static createRoot() {
    return new BulletPoint('', '', false, 0, null);
  }

  clone(): BulletPoint {
    return new BulletPoint(
      this.id,
      this.text,
      this.expanded,
      this.index,
      this.parentId,
      this.children.map((child) => child.clone())
    );
  }

  getId(): Id {
    return this.id;
  }

  getText(): string {
    return this.text;
  }

  setText(text: string): void {
    this.text = text;
  }

  isExpanded(): boolean {
    return this.expanded;
  }

  setExpanded(expanded: boolean): void {
    this.expanded = expanded;
  }

  getIndex(): number {
    return this.index;
  }

  setIndex(index: number): void {
    this.index = index;
  }
  addChild(child: BulletPoint): void {
    this.children.push(child);
    child.parentId = this.id;
    child.index = this.children.length - 1;
  }

  removeChild(child: BulletPoint): void {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      child.parentId = null;
      child.index = -1;
    }
  }

  removeChildren(): void {
    this.children.forEach((child) => {
      child.parentId = null;
      child.index = -1;
    });
    this.children = [];
  }

  getParentId(): Id | null {
    return this.parentId;
  }

  getChildren(): BulletPoint[] {
    return this.children;
  }
}

export default BulletPoint;
