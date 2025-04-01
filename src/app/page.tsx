'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import {profile, smile} from "./images/index";
import styles from "./page.module.css";
import Modal from "./Component/Modal/modal";
import PreviewCard from "./Component/PreviewCard/PreviewCard";
import { URL_IMAGE } from "../../config";

export default function Home({...props}) {
  console.log({...props});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<{
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
  }>({
    isOpen: false,
    title: "",
    content: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (c) =>{ 
    
    setModal( s => ({
      ...s,
      isOpen: true,
      content: <PreviewCard {...c} />,
    }))
    setIsModalOpen(true);
  }
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetch('https://api.qumiqo.com/api/posts?_limit=16&type=newest&page=1');
      const {data, meta}= await res.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  console.log(data)
  if (loading) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
       <Modal isOpen={isModalOpen} onClose={closeModal}>
          {modal.content}
        </Modal>
    {
      data.map( (c:any) => (
        <div key={c._id} className={styles.cardContainer}
        >
          <div className={styles.cardHeader}>
            <div className={styles.cardHeaderWrapper}>
              <div className={styles.cardHeaderAvatar}>
                <Image
                  className={styles.logo}
                  src={profile}
                  alt="avatar"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className={styles.cardHeaderInfo}>
                <span className={styles.cardHeaderName} >{c.author.name}</span>
                <a href={`mailto:${c.author.email}` }> <span className={styles.cardHeaderEmail} >@{c.author.username}</span></a>
              </div>
            </div>
            <div className={styles.cardHeaderWrapper}>
              <div className={styles.socialIconWrap}>
                <Image
                    className={styles.socialIcon}
                    src={smile}
                    // src={"https://api.qumiqo.com" + c.preview.thumbnail.filename}
                    alt="social"
                    width={20}
                    height={20}
                    objectFit="cover"
                />
                </div>
            </div>
          </div>
          <div className={styles.cardBody}
            onClick={()=>openModal(c)}
          >
              <Image
                className={styles.preview}
                src={URL_IMAGE + c.preview.thumbnail.filename}
                alt="preview"
                layout="fill"
                objectFit="cover"
              />
          </div>
        </div>
      ))
    }
    </div>
  );
}
