import sinonChai from "sinon-chai";
import { createSandbox, SinonStub, stub} from "sinon";
import { expect, use } from "chai";
import { HTTPTransport, queryStringify } from "./http.service.ts";
import { afterEach, beforeEach } from "mocha";

describe("HTTP Service", () => {
    use(sinonChai);
    const sandbox = createSandbox();
    let http: HTTPTransport;
    let request: SinonStub<any>;

    beforeEach(() => {
        http = new HTTPTransport("");
        request = sandbox
            .stub(http, "request" as keyof typeof http)
            .callsFake(() => Promise.resolve(new XMLHttpRequest()));
    });

    afterEach(() => {
        sandbox.restore();
    });

    it("should stringify data to query params", () => {
        expect(queryStringify({ a: "1", b: "2" })).to.eq("?a=1&b=2")
    });

    it("should call request method with given url and data", () => {
        http.get("", { data: { a: "1", b: "2" }});

        expect(request).calledWithMatch("https://ya-praktikum.tech/api/v2", { data: { a: "1", b: "2" }, method: "GET"});
    });

})
