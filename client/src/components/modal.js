import React from "react";

import { patchVideo } from "../requests/videos";

import circles from "../svg/circles.svg";
import closeIcon from "../svg/close.svg";

export default function Modal({ close, video, setVideo }) {
    async function submit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const res = await patchVideo(video._id, formData);
            setVideo(res);
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
                className="absolute text-center m-auto inset-0 w-1/2 h-3/4 z-20 bg-white shadown-md rounded-lg px-8 py-8"
            >
                <div className="border-b-1.5 border-light-dark pb-5 mb-5 flex justify-between">
                    <h3 className="text-4xl">Edit Video</h3>
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
                        <p className="text-xl text-left w-32">Title</p>
                        <input
                            type="text"
                            name="title"
                            placeholder="Video title..."
                            defaultValue={video.title}
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-full rounded-full p-4 flex items-center justify-between"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-xl text-left w-32">Description</p>
                        <textarea
                            name="description"
                            rows="3"
                            maxLength={200}
                            placeholder="Video description..."
                            defaultValue={video.description}
                            style={{ resize: "none" }}
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark w-full rounded-3xl p-4 flex items-center justify-between"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-xl text-left w-32">URL</p>
                        <input
                            type="text"
                            name="url"
                            placeholder="Video url..."
                            defaultValue={video.url}
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-full rounded-full p-4 flex items-center justify-between"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-xl text-left w-32">Thumbnail</p>
                        <input
                            type="text"
                            name="thumbnail"
                            placeholder="Video thumbnail..."
                            defaultValue={video.thumbnail}
                            className="border-1.5 focus:border-main focus:border-2 focus:outline-none border-light-dark h-10 w-full rounded-full p-4 flex items-center justify-between"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-xl text-left w-32">Slug</p>
                        <input
                            type="text"
                            name="slug"
                            placeholder="Video slug..."
                            defaultValue={video.slug}
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
