import classnames from "classnames";
import React from "react";

import { IColor, IHintLevel, IHintType, INumber } from "~/game/state";

interface Props {
  type: IHintType;
  value: IColor | INumber;
  hint: IHintLevel;
}

export default function Hint(props: Props) {
  const { type, value, hint } = props;

  const color = type === "color" ? value : "white";

  return (
    <>
      <div className="flex justify-center items-center hint">
        {hint !== 0 && (
          <div
            className={classnames(
              "outline-main-dark pointer flex items-center justify-center br-100 h-100 w-100 fw2 white f7 f4-l",
              { [`bg-${color}`]: type === "color" },
              { [`ba bw1  b--${color}`]: type === "color" && hint === 2 },
              { [`ba`]: type === "number" && hint === 2 }
            )}
          >
            {type === "number" && value}
          </div>
        )}
        {hint === 0 && (
          <div className="w-100 h-100 relative flex justify-center items-center fw2">
            {type === "number" && (
              <div className="absolute white o-50">{value}</div>
            )}
            <div
              className={`absolute w-100 o-80 rotate-135 bg-${color} b--${color}`}
              style={{ height: "2px" }}
            />
          </div>
        )}
      </div>
      <style jsx>{`
        .hint {
          width: 0.5rem;
          height: 0.5rem;
        }

        @media screen and (min-width: 60em) {
          .hint {
            width: 1rem;
            height: 1rem;
          }
        }
      `}</style>
    </>
  );
}
