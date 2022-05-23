import React from "react"
import {Route, Routes} from "react-router-dom"

import ListVideos from "./components/listVideos"
import Video from "./components/video"

class BaseRouter extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<ListVideos />} />
                <Route exact path="/videos/:uuid" element={<Video />} />
            </Routes>
        )
    }
}

export default BaseRouter