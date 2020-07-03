/**
 * @ Author: Lee
 * @ Description: 消息基础组件
 */

import React from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';

export interface Props {
  reverse?: boolean;
  avatar?: string;
  name?: string;
  children?: React.ReactNode;
}

export default function MessageBase(props: Props) {
  const { reverse = false, avatar = '', name = '', children } = props;

  const [avatarWidth, setAvatarWidth] = React.useState<number>();
  const avatarRef = React.useRef<HTMLDivElement>(null);

  // 通过 flex 反向显示来区分聊天室中的当前用户和其他用户
  React.useEffect(() => {
    const avatarEl = avatarRef.current;
    if (avatarEl) {
      const { width } = avatarEl.getBoundingClientRect();
      setAvatarWidth(width);
    }
  }, []);

  return (
    <Box display="flex" flexDirection={reverse ? 'row-reverse' : 'row'}>
      <Avatar ref={avatarRef} src={avatar} />
      <Box display="flex" flexDirection="column" mx={1}>
        {!reverse && (
          <Typography variant="caption" color="textSecondary">
            {name}
          </Typography>
        )}
        {children}
      </Box>
      <Box width={avatarWidth} height={avatarWidth} flexShrink={0} />
    </Box>
  );
}
