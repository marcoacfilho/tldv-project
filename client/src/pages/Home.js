import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import Input from "../components/Input";
import Modal from "../components/Modal";
import UpdateButton from "../components/UpdateButton";
import { getVideos, updateVideo } from "../services/videos";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ItemsList = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  width: 70%;
  height: 100vh;
  margin-top: 50px;
  justify-content: space-between;
  flex-direction: row;
`;

const VideoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const VideoPlayer = styled.div`
  display: flex;
  flex: 1;
  padding-right: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80%;
  border-right: 1px solid black;
  margin-right: 10px;
`;

const VideoInputs = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [slug, setSlug] = useState(null);
  const [title, setTitle] = useState(null);
  const [url, setURL] = useState(null);

  useEffect(() => {
    fetchVideosAPI();
  }, []);

  const fetchVideosAPI = async () => {
    const videosResponse = await getVideos();
    setVideos(videosResponse);
  };

  const handleVideoClick = (video) => {
		setSelectedVideo(video);
		setSlug(video.slug);
		setTitle(video.title);
		setURL(video.url);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    await updateVideo({
			slug,
			title,
			url,
			id: selectedVideo.id
		});
		await fetchVideosAPI();
		setShowModal(false);
  };

  return (
    <>
      <Container>
        <Header title="tl;dv Videos" />
        <ItemsList>
          {videos.map(
            (video) =>
              video.isPublic && (
                <ItemCard
                  title={video.title}
                  onClick={() => handleVideoClick(video)}
                />
              )
          )}
        </ItemsList>
      </Container>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <VideoContainer>
            <VideoPlayer>
              <ReactPlayer url={selectedVideo.url} width={300} height={215} />
            </VideoPlayer>
            <VideoInputs>
              <Input
                label="Slug"
                value={selectedVideo.slug}
                onChange={(value) => setSlug(value)}
              />
              <Input
                label="Title"
                value={selectedVideo.title}
                onChange={(value) => setTitle(value)}
              />
              <Input
                label="URL"
                value={selectedVideo.url}
                onChange={(value) => setURL(value)}
              />
              <UpdateButton label="Update" onClick={handleUpdate} />
            </VideoInputs>
          </VideoContainer>
        </Modal>
      )}
    </>
  );
}

export default Home;
