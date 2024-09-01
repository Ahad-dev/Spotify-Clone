import { Play } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const SongCard = ({song}) => {
  const navigate = useNavigate();
  const [showPlay, setShowPlay] = React.useState(false);
  return (
    <motion.div
      onHoverStart={() => setShowPlay(true)}
      onHoverEnd={() => setShowPlay(false)}
      initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      className="min-w-48 h-60  bg-transparent transition-colors cursor-pointer hover:bg-white/10 rounded-xl p-3"
      onClick={() => navigate(`/${song.id}`)}
    >
      <div className="relative overflow-hidden rounded-lg w-full h-2/3 bg-center  bg-red-500">
        <div className="w-full h-full absolute bg-black/40"></div>
        <img src={song.img} className="object-cover w-full h-full " alt="" />
        <div className="absolute top-0 w-full h-[5px] border-t-4 border-green-700" style={{borderColor:song.color.primary}}>
          <span className="relative pl-2 top-1 border-l-4 font-semibold border-green-700" style={{borderColor:song.color.primary}}>
            {song.name}
          </span>
        </div>
        <motion.button
          // Show Depend Upan showplay
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showPlay ? 1 : 0, y: showPlay ? 0 : 20 }}
          transition={{ delay: 0.2 }}
          className={` ${
            showPlay ? "" : "hidden"
          }absolute right-1 bottom-1 h-14 w-14 hover:bg-green-400 bg-green-500 flex justify-center items-center rounded-full`}
          onClick={(e) => { e.stopPropagation();}}
        >
          <Play size={28} fill="black" color="black" />
        </motion.button>
      </div>
      <div className="mt-2">
        <p>{song.name}</p>
        <p className="text-gray-400">{song.artists}</p>
      </div>
    </motion.div>
  );
};

export default SongCard;
