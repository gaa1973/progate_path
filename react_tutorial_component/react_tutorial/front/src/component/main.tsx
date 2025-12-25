import {createRoot} from "react-dom/client";
import {Title} from "./title";
import {Body} from "./body";
import {Footer} from "./footer";

const rootElement = document.getElementById("root")!;
const reactRoot = createRoot(rootElement);

const person = {
  name: "taro",
  age: 19,
};

const reactElement = (
  <>
    <Title text={"2World"} />
    <Body person={person} />
    <Footer>
      <div>
        <a href="https://blog.example.com">Blog</a>
      </div>
      <div>
        <a href="https://sns.example.com">SNS</a>
      </div>
    </Footer>
  </>
);

reactRoot.render(reactElement);
