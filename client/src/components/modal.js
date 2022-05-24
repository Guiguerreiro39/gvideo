import React from "react";
import { useNavigate } from "react-router-dom";

import { patchVideo, postVideo } from "../requests/videos";

import circles from "../svg/circles.svg";
import closeIcon from "../svg/close.svg";

export default function Modal({ close, video = {}, setVideo = () => {} }) {
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            let res;
            if (Object.keys(video).length > 0) res = await patchVideo(video._id, formData);
            else res = await postVideo(formData)

            setVideo(res);
            navigate(`/videos/${res._id}`);
        } catch (err) {
            console.error(err);
        } finally {
            close();
        }
    }

    return (
        <div>
            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="absolute text-center m-auto inset-0 w-3/4 md:w-2/3 2xl:h-4/5 h-5/6 z-20 bg-white shadown-md rounded-lg p-6 md:p-8"
            >
                <div className="border-b-1.5 border-light-dark pb-3 mb-3 lg:pb-5 lg:mb-5 flex justify-between">
                    <h3 className="text-3xl lg:text-4xl">{Object.keys(video).length > 0 ? "Edit" : "Create"} Video</h3>
                    <button onClick={() => close()}className="focus:outline-none rounded-full h-10 w-10 border-1.5 border-light-dark hover:border-2 hover:border-main flex justify-center items-center">
                        <img
                            src={closeIcon}
                            alt="edit"
                            className="filter-icon"
                        />
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <p className="md:text-xl text-lg text-left w-32 truncate">Title</p>
                        <input
                            type="text"
                            name="title"
                            maxLength={40}
                            placeholder="Video title..."
                            defaultValue={Object.keys(video).length > 0 ? video.title : ""}
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-full rounded-full p-4 flex items-center justify-between"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="md:text-xl text-lg text-left w-32 truncate">Description</p>
                        <textarea
                            name="description"
                            rows="3"
                            maxLength={200}
                            placeholder="Video description..."
                            defaultValue={Object.keys(video).length > 0 ? video.description : ""}
                            style={{ resize: "none" }}
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark w-full rounded-3xl p-4 flex items-center justify-between"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="md:text-xl text-lg text-left w-32 truncate">URL</p>
                        <input
                            type="text"
                            name="url"
                            placeholder="Video url..."
                            defaultValue={Object.keys(video).length > 0 ? video.url : ""}
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-full rounded-full p-4 flex items-center justify-between"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="md:text-xl text-lg text-left w-32 truncate">Thumbnail</p>
                        <input
                            type="text"
                            name="thumbnail"
                            placeholder="Video thumbnail..."
                            defaultValue={Object.keys(video).length > 0 ? video.thumbnail : ""}
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-full rounded-full p-4 flex items-center justify-between"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="md:text-xl text-lg text-left w-32 truncate">Slug</p>
                        <input
                            type="text"
                            name="slug"
                            maxLength={20}
                            placeholder="Video slug..."
                            defaultValue={Object.keys(video).length > 0 ? video.slug : ""}
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-full rounded-full p-4 flex items-center justify-between"
                        />
                    </div>
                    <button className="focus: outline-none absolute w-32 bottom-5 left-0 right-0 mx-auto my-5 text-center text-light-dark border-1.5 border-light-dark rounded-full px-6 py-2 hover:border-2 hover:font-medium hover:border-main hover:text-main hover:scale-110 duration-300 transform">
                        Save
                    </button>
                    <img
                        src={circles}
                        alt=""
                        className="absolute bottom-0 right-0 h-1/3 -z-10 opacity-50"
                    />
                </div>
            </form>
            <button
                onClick={close}
                tabIndex="-1"
                className="fixed inset-0 h-full w-full cursor-default bg-transparent z-10 focus:outline-none bg-black opacity-50"
            ></button>
        </div>
    );
}
