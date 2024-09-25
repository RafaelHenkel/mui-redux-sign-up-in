import React from 'react';
import HeaderDefault from './header/HeaderDefault';
import MainDefaultStyled from './MainDefaultStyled';
import PageDefaultStyled from './PageDefaultStyled';
import FooterDefault from './footer/FooterDefault';

interface PageDefaultProps {
  children: React.ReactNode;
  config?: {
    navigation: boolean;
    footer: boolean;
  };
}

function PageDefault({ children, config }: PageDefaultProps) {
  return (
    <>
      <PageDefaultStyled>
        {config?.navigation !== false && <HeaderDefault />}
        <MainDefaultStyled>{children}</MainDefaultStyled>
        {config?.footer !== false && <FooterDefault />}
      </PageDefaultStyled>
    </>
  );
}

export default PageDefault;
