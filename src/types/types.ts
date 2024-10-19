export interface SegmentProps {
  segmentNumber: number;
  segments: number;
  goToSegment: (segment: number) => void;
}

interface projectInfo {
  link: string;
  name: string;
  stack: string[];
}

export interface projectInfoProps {
  projectInfo: projectInfo;
}
