import React from "react";

interface Props {
  title: string;
  items: any
}

const FooterWidget = (props: Props) => {
  const { title, items } = props;
  return (
    <div>
      <p>title</p>
      <ol>
        {items.map((item: any, index: number) => {
          return (
            <li key={index}>
              <p className="hover:underline">{item.title}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default FooterWidget;
