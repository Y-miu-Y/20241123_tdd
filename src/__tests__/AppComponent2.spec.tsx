import { Post } from "../Post"
import { render,screen } from "@testing-library/react";

describe("ユーザーは投稿のタイトルを見ることができる",()=>{
    test("こんにちはというタイトルが表示される",async ()=>{
        render(<Post />)
        expect(await screen.findByTestId("post-title")).toHaveTextContent("こんにちは")
    })
})