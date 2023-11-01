import mycss from "../style/yourStyle.module.css";
export function MyBlock() {
  return (
    <div>
      <h1 className={[mycss.error, mycss.special, mycss.coffee].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
