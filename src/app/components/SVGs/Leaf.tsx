import Svg, { Path } from "react-native-svg";

export default function Leaf() {
  return (
    <Svg width={56} height={56} viewBox="0 0 100 100">
      <Path
        d="M14 86C16 46 43 15 88 12c1 43-25 74-74 74Z"
        fill="#285943"
      />
      <Path
        d="M19 81c18-20 38-40 63-63"
        fill="none"
        stroke="#FAF8F3"
        strokeLinecap="round"
        strokeWidth={3}
      />
      <Path
        d="m39 60 1-18m16 1 13-1M29 71l-1-17"
        fill="none"
        stroke="#FAF8F3"
        strokeLinecap="round"
        strokeWidth={2}
      />
    </Svg>
  );
}