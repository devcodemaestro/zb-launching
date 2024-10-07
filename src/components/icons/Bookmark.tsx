import React from "react";

interface BookmarkProps {
  className?: string;
}
// width="16" height="21"
const Bookmark: React.FC<BookmarkProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5C1 2.79086 2.79086 1 5 1H11C13.2091 1 15 2.79086 15 5V18.1683C15 18.9595 14.1248 19.4373 13.4592 19.0095L9.08152 16.1953C8.4227 15.7717 7.5773 15.7717 6.91848 16.1953L2.54076 19.0095C1.87525 19.4373 1 18.9595 1 18.1683V5Z"
        stroke="black"
        strokeWidth="1.8"
      />
      <path
        d="M5 6.5H11"
        stroke="#FF8107"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bookmark;
