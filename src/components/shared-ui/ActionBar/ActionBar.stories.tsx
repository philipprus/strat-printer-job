// Button.stories.ts | Button.stories.tsx

import { Meta } from "@storybook/react";
import { Button } from "reactstrap";
import Icon from "../Icon/Icon";
import ActionBar, { ActionBarProps } from "./ActionBar";

export default {
  component: ActionBar,
  title: "Shared-UI/ActionBar",
} as Meta;

export const Primary: React.VFC<ActionBarProps> = () => (
  <ActionBar
    title={`Current printing job  `}
    extra={
      <Button onClick={()=>{}} className="btn-icon btn-pause">
        <Icon icon="pause" width={13} height={14} />
      </Button>
    }
    progressValue={40}
  />
);
