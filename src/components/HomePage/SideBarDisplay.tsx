import { SegmentProps } from "../../types/types";
import SegmentCounter from "./SegmentCounter";
import SubmenuButton from "../SideBar/SubmenuButton";

const SideBarDisplay: React.FC<SegmentProps> = ({
  segmentNumber,
  segments,
  goToSegment,
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      <SubmenuButton
        segments={segments}
        goToSegment={goToSegment}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div
        className={`${
          ((isOpen && window.innerWidth <1280) || segmentNumber === 4) ? "opacity-0 pointer-events-none" : ""
        } fixed right-4 top-1/2 transform -translate-y-1/2 hidden lg:block`}
      >
        <SegmentCounter
          segmentNumber={segmentNumber}
          segments={segments}
          goToSegment={goToSegment}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  );
};

export default SideBarDisplay;
