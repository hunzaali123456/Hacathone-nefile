import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Handbag } from '../Handbag/Handbag';
import { ProjectStatus_Property1CaretRi } from '../ProjectStatus_Property1CaretRi/ProjectStatus_Property1CaretRi';
import { CaretrightIcon } from './CaretrightIcon';
import { Ellipse33Icon } from './Ellipse33Icon';
import { GroupIcon } from './GroupIcon';
import { HandbagIcon } from './HandbagIcon';
import classes from './Navber.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 188:6050 */
export const Navber: FC<Props> = memo(function Navber(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.menu}>Menu</div>
      <div className={classes.blog}>Blog</div>
      <div className={classes.pages}>Pages</div>
      <div className={classes.about}>About </div>
      <div className={classes.shop}>Shop </div>
      <div className={classes.contact}>Contact </div>
      <ProjectStatus_Property1CaretRi
        className={classes.projectStatus}
        classes={{ caretRight: classes.caretRight }}
        swap={{
          caretRight: (
            <div className={classes.caretRight}>
              <CaretrightIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.rectangle8839}></div>
      <div className={classes.search}>Search...</div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon3} />
      </div>
      <Handbag
        className={classes.handbag}
        swap={{
          handbag: <HandbagIcon className={classes.icon2} />,
        }}
      />
      <div className={classes.home}>Home</div>
      <div className={classes.ellipse33}>
        <Ellipse33Icon className={classes.icon4} />
      </div>
      <div className={classes.foodtuck}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Food</span>
          <span className={classes.label2}>tuck</span>
        </p>
      </div>
    </div>
  );
});
