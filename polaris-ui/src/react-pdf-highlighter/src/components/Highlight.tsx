import React, { Component } from "react";

import "../style/Highlight.css";

import type { LTWHP } from "../types.js";

interface Props {
  position: {
    boundingRect: LTWHP;
    rects: Array<LTWHP>;
  };
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  comment: {
    emoji: string;
    text: string;
  };
  isScrolledTo: boolean;
}

export class Highlight extends Component<Props> {
  render() {
    const {
      position,
      onClick,
      onMouseOver,
      onMouseOut,
      comment,
      isScrolledTo,
    } = this.props;

    const { rects, boundingRect } = position;

    return (
      <div
        className={`Highlight ${isScrolledTo ? "Highlight--scrolledTo" : ""}`}
      >
        {comment ? (
          <div
            className="Highlight__emoji"
            style={{
              left: 20,
              top: boundingRect.top,
            }}
          >
            {comment.emoji}
          </div>
        ) : null}
        <div className="Highlight__parts">
          {rects.map((rect, index) => (
            <div
              role="button"
              aria-label="Button"
              tabIndex={0}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              onFocus={onMouseOver}
              onBlur={onMouseOut}
              onClick={onClick}
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.code === "Enter") {
                  onClick && onClick();
                }
              }}
              // biome-ignore lint/suspicious/noArrayIndexKey: We can use position hash at some point in future
              key={index}
              style={rect}
              className={"Highlight__part"}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Highlight;
