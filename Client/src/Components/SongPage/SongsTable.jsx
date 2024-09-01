import React from "react";
import { SONGS } from "../../services/Songs";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const SongsTable = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Function to generate random duration
  const generateRandomDuration = () => {
    const minutes = Math.floor(Math.random() * 4) + 2; // Random minutes between 2 and 5
    const seconds = Math.floor(Math.random() * 60); // Random seconds between 0 and 59
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex-1 relative -top-20 px-6">
      <table className="w-full">
        <thead className="text-white/70 font-semibold text-start">
          <tr className="grid grid-cols-12">
            <th className="text-start col-span-1">#</th>
            <th className="text-start col-span-7">Title</th>
            <th className="text-start col-span-2">Album</th>
            <th className="text-start col-span-2">Duration</th>
          </tr>
        </thead>
        <tbody className="mt-3">
          {SONGS.map((song, index) => (
            <motion.tr
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={song.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="grid grid-cols-12 py-4 rounded-lg hover:bg-white/20 items-center pl-2"
            >
              <td className="text-start col-span-1">
                {hoveredIndex === index ? (
                  <Play fill="white" />
                ) : (
                  index + 1
                )}
              </td>
              <td className="text-start col-span-7 flex items-center gap-2">
                <div className="w-14 rounded-md aspect-square overflow-hidden bg-red-600">
                  <img
                    className="object-cover w-full h-full"
                    src={song.img}
                    alt={song.name}
                  />
                </div>
                {song.name}
              </td>
              <td className="text-start col-span-2">{song.artists}</td>
              <td className="text-start col-span-2">{generateRandomDuration()}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongsTable;
