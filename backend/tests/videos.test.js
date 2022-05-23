const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const request = require('supertest')
const app = require("../app")

chai.use(chaiHttp)

let id;
const payloadPost = {
    title: "test",
    description: "test",
    slug: "test",
    url: "test",
    thumbnail: "test"
}

const payloadPatch = {
    title: "update",
    description: "test",
    slug: "test",
    url: "test",
    thumbnail: "test"
}

describe("Videos", () => {
    it("should create a video and return it", (done) => {
        request(app)
            .post("/api/videos")
            .send(payloadPost)
            .end((_, res) => {
                expect(res).to.have.status(201)
                expect(res.body).to.contain.property("payload")
                expect(res.body.payload).to.contain.property("_id")
                expect(res.body.payload).to.contain.property("title")
                expect(res.body.payload).to.contain.property("description")
                expect(res.body.payload).to.contain.property("slug")
                expect(res.body.payload).to.contain.property("url")
                expect(res.body.payload).to.contain.property("thumbnail")
                expect(res.body.payload).to.contain.property("isPublic")

                id = res.body.payload._id
                done()
            })
    })

    it("should update a video and return it", (done) => {
        request(app)
            .patch(`/api/videos/${id}`)
            .send(payloadPatch)
            .end((_, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.contain.property("payload")

                expect(res.body.payload).to.contain.property("_id")
                expect(res.body.payload).to.contain.property("title")
                expect(res.body.payload).to.contain.property("description")
                expect(res.body.payload).to.contain.property("slug")
                expect(res.body.payload).to.contain.property("url")
                expect(res.body.payload).to.contain.property("thumbnail")
                expect(res.body.payload).to.contain.property("isPublic")

                expect(res.body.payload._id).to.equal(id)
                expect(res.body.payload.title).to.equal(payloadPatch.title)
                expect(res.body.payload.description).to.equal(payloadPatch.description)
                expect(res.body.payload.slug).to.equal(payloadPatch.slug)
                expect(res.body.payload.url).to.equal(payloadPatch.url)
                expect(res.body.payload.thumbnail).to.equal(payloadPatch.thumbnail)

                done()
            })
    })

    it("should return a single video with the specified id", (done) => {
        request(app)
            .get(`/api/videos/${id}`)
            .end((_, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.contain.property('payload')
                expect(res.body.payload).to.contain.property("_id")
                expect(res.body.payload).to.contain.property("title")
                expect(res.body.payload).to.contain.property("description")
                expect(res.body.payload).to.contain.property("slug")
                expect(res.body.payload).to.contain.property("url")
                expect(res.body.payload).to.contain.property("thumbnail")
                expect(res.body.payload).to.contain.property("isPublic")

                done()
            })
    })

    it("should return all videos", (done) => {
        request(app)
            .get("/api/videos")
            .end((_, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.contain.property('payload')

                if (Object.keys(res.body.payload).length > 0) {
                    expect(res.body.payload[0]).to.contain.property("_id")
                    expect(res.body.payload[0]).to.contain.property("title")
                    expect(res.body.payload[0]).to.contain.property("description")
                    expect(res.body.payload[0]).to.contain.property("slug")
                    expect(res.body.payload[0]).to.contain.property("url")
                    expect(res.body.payload[0]).to.contain.property("thumbnail")
                    expect(res.body.payload[0]).to.contain.property("isPublic")
                }

                done()
            })
    })

})