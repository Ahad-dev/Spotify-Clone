import { Plus } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const InfoCard = ({ type, lable ,img,isSidebarOpen}) => {
  return (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 , y: 0}}
    className="flex items-center gap-4 cursor-pointer">
      {type === "Playlist" ? (
        <div className="max-w-14 overflow-hidden rounded-md aspect-square bg-red-600">
            <img src={img} alt="" />
        </div>
      ) : (
        <div className="max-w-14 overflow-hidden rounded-full aspect-square bg-red-600">
            <img src={img} alt="" />
        </div>
      )}

      <div className={`flex flex-col justify-center gap-1 ${!isSidebarOpen&&"hidden"}`}>
        <p className="font-semibold text-white">{lable}</p>
        <p className="text-white/70 text-xs">{type}</p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
