import React from "react";
import galleryImages from "./galleryImage";
import Masorny, { ResponsiveMasonry } from "react-responsive-masonry";

const MansonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 4 }}>
      <Masorny glutter="1rem">
        {galleryImages.map((item, index) => (
          <img
            className="mansonry__img"
            src={item}
            key={index}
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masorny>
    </ResponsiveMasonry>
  );
};

export default MansonryImagesGallery;
