import React from 'react';
import styles from './styles/preview.module.css';
import Image from 'next/image';
import { URL_IMAGE } from '../../../../config';
import { arrowRight, info } from '@/app/images';

const PreviewCard = ({...props}) => {
  console.log({...props});
  const { title, preview, categories } = props;
//   {
//     "_id": "67885fb4ddddd1b810380617",
//     "author": {
//         "_id": "67879ba40a3d2607e071ac36",
//         "username": "Qclay",
//         "name": "Qclay",
//         "title": null,
//         "email": "dev@qclay.design"
//     },
//     "title": "Elegant Breakfast Setting with Coffee and Fresh Fruits",
//     "views": 9,
//     "categories": [
//         {
//             "_id": "6787aae70a3d2607e071b7a1",
//             "posts": [],
//             "name": "Residential Interiors Design",
//             "countPosts": 0,
//             "createdAt": "2025-01-15T12:32:39.186Z",
//             "updatedAt": "2025-01-15T12:32:39.186Z",
//             "__v": 0
//         },
//         {
//             "_id": "6787b2b00a3d2607e071bf8e",
//             "posts": [],
//             "name": "Restaurant & Bar Interiors Design",
//             "countPosts": 0,
//             "createdAt": "2025-01-15T13:05:52.557Z",
//             "updatedAt": "2025-01-15T13:05:52.557Z",
//             "__v": 0
//         },
//         {
//             "_id": "6787d460ddddd1b8103766b3",
//             "posts": [],
//             "name": "Coffee Shop Design",
//             "countPosts": 0,
//             "createdAt": "2025-01-15T15:29:36.594Z",
//             "updatedAt": "2025-01-15T15:29:36.594Z",
//             "__v": 0
//         }
//     ],
//     "preview": {
//         "thumbnail": {
//             "_id": "67885fb3ddddd1b8103805b9",
//             "mimetype": "image/jpeg",
//             "extension": "jpeg",
//             "size": 152186,
//             "filename": "/4b680ad9-4537-4402-89f5-66651e45221f.jpeg",
//             "width": 1080,
//             "height": 1348,
//             "thumbnail": null,
//             "createdAt": "2025-01-16T01:24:03.625Z",
//             "updatedAt": "2025-01-16T01:24:03.625Z",
//             "__v": 0
//         },
//         "size": "600x400",
//         "xCoordinate": 0,
//         "yCoordinate": 0,
//         "_id": "67885fb4ddddd1b81038061a"
//     },
//     "commentsCount": 0,
//     "sharesCount": 0,
//     "reactionsCount": 0,
//     "likesCount": 0,
//     "classifications": [
//         "Residential",
//         "Hospitality",
//         "Commercial"
//     ],
//     "shots": [
//         "67885fb4ddddd1b810380624",
//         "67885fb4ddddd1b81038062b"
//     ],
//     "isPublished": true,
//     "createdAt": "2025-01-16T01:24:04.352Z",
//     "updatedAt": "2025-01-28T20:13:14.807Z",
//     "allReactions": [],

  return (
    <div className={styles.container}>

      <div className={styles.previewHeider}>
        <div>
          <h4 className={styles.previewHeiderTitle}>
            {title}
          </h4>
          <div className={styles.previewHeiderCategories}>
            {categories.slice(0,1).map((c:any) => (
              <>
              <span className={styles.previewHeiderCategoriesDate}>{new Date(c.createdAt).toLocaleDateString("ru-RU",{
                month: "long", day: "numeric" 
              })}</span>
              <span key={c._id}>{c.name}</span>
              </>
            ))}
          </div>
        </div>
        <div className={styles.previewHeiderMeta}>
          <div className={styles.previewHeiderMetaIcon}
          onClick={() => alert("С кем поделиться")}          
          >
            <Image 
              className={styles.previewHeiderMetaImage}
              src={arrowRight} 
              alt={'arrow right'}
              width={12}
              height={15}
            />
          </div>
          <div className={styles.previewHeiderMetaIcon}
          onClick={() => alert("Тут можно глянуть доп инфу")}
          
          >
            <Image 
              className={styles.previewHeiderMetaImage}
              src={info} 
              alt={'arrow right'}
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>

      <div className={styles.previewBody}>
        <Image 
          src={URL_IMAGE + preview.thumbnail.filename} 
          alt={'Thumbnail'}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.previewFooter}>
        <div className={styles.previewFooterThambs}
          >
          <Image 
            className={styles.previewFooterThambsImage}
            src={URL_IMAGE + preview.thumbnail.filename} 
            alt={'Thumbnail'}
            width={40}
            height={40}
            />
        </div>
        <div className={styles.previewFooterCounter}
        >
          <span className={`${true? styles.previewFooterCounterItem : styles.previewFooterCounterItemActive}`}>1</span>
        </div>
      </div>
    </div>
  )
}

export default PreviewCard