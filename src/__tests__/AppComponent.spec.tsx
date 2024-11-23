import App from "../App";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe("ユーザーはブログ名を見ることができる",()=>{
    beforeEach(()=>{
        render(<App />)
    })

    test("JSON Placeholder Blogが表示されている",()=>{        
        expect(screen.getByTestId("blog-name")).toHaveTextContent('JSON Placeholder Blog');
    })

})

describe("ユーザーは投稿のタイトルが見れる",()=>{
    
        test("こんにちはというタイトルが表示されている",async ()=>{
        render(<App />)
        expect((await screen.findAllByTestId("post-title"))[0]).toHaveTextContent("こんにちは")
    })
})

describe("ユーザーは投稿の本文が見れる",()=>{
    
    test("本文が表示されている",async ()=>{
        render(<App />)
        expect((await screen.findAllByTestId("post-body"))[0]).toHaveTextContent("今日は晴れです")
    })
})

describe("ユーザーは投稿の本文を途中まで見ることができる",()=>{
    test("本文が10文字まで表示される",async ()=>{
        render(<App />)
        expect((await screen.findAllByTestId("post-body"))[1]).toHaveTextContent("今日は晴れです今日は...")
    })
})


describe("ユーザーは投稿のタイトルを押すと投稿の詳細ページに遷移する",()=>{
    test("投稿のタイトルを押すと投稿の詳細ページに遷移する",async ()=>{
        const mockNav = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(mockNav);

        render(<App />)
        const title = (await screen.findAllByTestId("post-title"))[0];
        await userEvent.click(title);
        expect(mockNav).toHaveBeenCalledWith('/posts/1');
    })
})