import { SegmentProps } from "../../types/types";
import SegmentCounter from "./SegmentCounter";
import SubmenuButton from "../SideBar/SubmenuButton";

const SideBarDisplay: React.FC<SegmentProps> = ({
  segmentNumber,
  segments,
  goToSegment,
}) => {
  return (
    <>
      <SubmenuButton segments={segments} goToSegment={goToSegment} />
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <SegmentCounter
          segmentNumber={segmentNumber}
          segments={segments}
          goToSegment={goToSegment}
        />
      </div>
    </>
  );
};

export default SideBarDisplay;
