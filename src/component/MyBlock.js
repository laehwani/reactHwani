import mycss from "../style/yourStyle.module.css";
export function MyBlock() {
  return (
    <div>
      <h1 className={mycss.error}>Lorem ipsum dolor sit amet.</h1>
    </div>
  );
}
