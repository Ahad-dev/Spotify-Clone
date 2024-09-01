import React from "react";
import { motion } from "framer-motion";


const SelectedSongCard = ({song}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      className="max-w-56 aspect-auto bg-transparent rounded-md"
    >
      <div className="relative overflow-hidden rounded-lg w-full h-2/3 bg-center  bg-red-500">
        <div className="w-full h-full absolute bg-black/40"></div>
        <img src={song.img} className="object-cover w-full h-full " alt="" />
        <div className="absolute top-0 w-full h-[5px] border-t-8 border-blue-500" style={{borderColor:song.color.primary}}>
          <span className="relative pl-2 top-1 border-l-8 font-semibold border-blue-500" style={{borderColor:song.color.primary}}>
            {song.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectedSongCard;
