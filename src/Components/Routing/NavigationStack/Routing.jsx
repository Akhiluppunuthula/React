import { BrowserRouter} from "react-router-dom";
import PostLogin from "../PostLogin/PostLogin";
import PreLogin from "../PreLogin/PreLogin";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
       {false ? <PostLogin /> : <PreLogin />}
      </BrowserRouter>
    </div>
  );
}
