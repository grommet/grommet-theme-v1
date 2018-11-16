// (C) Copyright 2017-2018 Hewlett Packard Enterprise Development LP
import { css } from 'styled-components';
import { rgba } from 'polished';

const isObject = item => (
  item && typeof item === 'object' && !Array.isArray(item));

const deepFreeze = (obj) => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

const workSansPath = 'https://fonts.gstatic.com/s/worksans/v2';

export const v1 = deepFreeze({
  global: {
    colors: {
      background: '#ffffff',
      brand: '#8C50FF',
      border: rgba(0, 0, 0, 0.15),
      control: '#8C50FF',
      focus: '#99d5ef',
      'neutral-1': '#5d0cfb',
      'neutral-2': '#7026ff',
      'neutral-3': '#767676',
      'accent-1': '#c3a4fe',
      'accent-2': '#a577ff',
      'status-critical': '#FF324D',
      'status-warning': '#FFD602',
      'status-ok': '#8CC800',
      'status-unknown': '#a8a8a8',
      'status-disabled': '#a8a8a8',
      'dark-1': '#000001',
      'dark-2': '#333333',
      'dark-3': '#444444',
      'dark-4': '#555555',
      'dark-6': '#666666',
      'light-1': '#f5f5f5',
    },
    control: {
      border: {
        width: '1px',
        radius: '0px',
        color: 'border',
      },
    },
    font: {
      family: "'Work Sans', Arial, sans-serif",
      face: `
        @font-face {
          font-family: 'Work Sans';
          src:
            local('Work Sans'),
            local('WorkSans-Regular'),
            url("${workSansPath}//ElUAY9q6T0Ayx4zWzW63VJBw1xU1rKptJj_0jans920.woff2") format('woff2');
        }
      `,
    },
  },
  button: {
    extend: css`
      ${props => !props.plain && `
        font-weight: 600;
        border-radius: 5px;
        padding: 6px 22px;
      `}
    `,
  },
  checkBox: {
    icon: {
      extend: css`
        box-sizing: border-box;
        position: absolute;
        top: 0px;
        left: 0px;
        width: ${props => props.theme.checkBox.size};
        height: ${props => props.theme.checkBox.size};
      `,
    },
  },
});
