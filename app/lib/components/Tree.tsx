"use client";

import React from "react";
import Toggle from "./Toggle";
import BulletPoint from "../tree/BulletPoint";

export const Tree: React.FC<{
  root: BulletPoint;
  onClick: (address: string) => void;
  onChange: (address: string, text: string) => void;
}> = ({ root, onClick, onChange }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [text, setText] = React.useState(root.getText());
  const [address, setAddress] = React.useState<string | null>(null);

  const handleClick = () => {
    setExpanded(!expanded);
    onClick(address!);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChange(address!, e.target.value);
  };

  return (
    <div>
      <div className="flex items-center">
        <Toggle expanded={expanded} onClick={handleClick} />
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        />
      </div>
      {expanded && (
        <div className="ml-4">
          {root.getChildren().map((child) => (
            <Tree
              key={child.getId()}
              root={child}
              onClick={function (address: string): void {
                throw new Error("Function not implemented.");
              }}
              onChange={function (address: string, text: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tree;
