import { useState } from 'react';
import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { SidePanelResponsive } from '@alfalab/core-components/side-panel/responsive';
import SideMenuElement from './side-menu-element/side-menu-element';
import { AppRoutes } from '../../constants/routes';

import './side-menu.css';

export const Links = {
  [AppRoutes.MadeInAlfa]: 'Сделано в Альфе',
  [AppRoutes.CustomDesign]: 'Свой дизайн',
  [AppRoutes.Contacts]: 'Контакты',
} as const;

interface ISideMenu {
  title: string;
}

function SideMenu({ title }: ISideMenu) {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => setOpen(!open);
  const handleLinkClick = () => {
    handleModalOpen();
  };

  return (
    <>
      <Button type="button" size="s" onClick={handleModalOpen} view="outlined">
        <Typography.Text className="side-menu__button" weight="bold">
          {title}
        </Typography.Text>
      </Button>

      <SidePanelResponsive
        open={open}
        onClose={handleModalOpen}
        size="s"
        placement="right"
        nativeScrollbar={false}
        breakpoint={768}>
        <SidePanelResponsive.Header hasCloser={true} />

        <SidePanelResponsive.Content>
          <ul className="side-menu__list">
            {Object.entries(Links).map(([key, value]) => (
              <li key={key}>
                <SideMenuElement href={key} title={value} onClick={handleLinkClick} />
              </li>
            ))}
          </ul>
        </SidePanelResponsive.Content>
      </SidePanelResponsive>
    </>
  );
}

export default SideMenu;
