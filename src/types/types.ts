export interface SegmentProps {
  segmentNumber: number;
  segments: number;
  goToSegment: (segment: number) => void;
  isOpen:boolean;
  setIsOpen: (open: boolean) => void;
}

interface projectInfo {
  GitLink: string;
  GitLink2?: string;
  VercelLink:string;
  name: string;
  stack: string[];
  desc:string;
}

export interface SubmenuProps {
  segments?: number;
  goToSegment?: (index: number) => void;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export interface projectInfoProps {
  projectInfo: projectInfo;
}

export interface SegmentsNameProps {
  isOpen: boolean;
}