const Bookmark = require("./Bookmark")

// @ponicode
describe("copyURL", () => {
    let inst

    beforeEach(() => {
        inst = new Bookmark.default("Jean-Philippe")
    })

    test("0", () => {
        let callFunction = () => {
            inst.copyURL("callback detected, not supported yet", "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.copyURL("callback detected, not supported yet", "This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.copyURL("callback detected, not supported yet", "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.copyURL("callback detected, not supported yet", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.copyURL(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
