import React from 'react';
import { Slider, Typography } from 'antd';
import cls from './SliderComponent.module.css';

interface SliderComponentProps {
  className?: string;
  sliderValues: number[];
  onChange: (value: number[]) => void;
}

export const SliderComponent = ({ sliderValues, onChange }: SliderComponentProps) => {
  //const [sliderValues, setSliderValues] = useState<number[]>([18, 50]);
  const onChangeSlider = (values: number[]) => {
    onChange(values);
    console.log('SliderValues: ', values);
  };
  const marks = {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
    70: '70',
    80: '80',
  };
  return (
    <div className={cls.sliderWrapper}>
      <div className={cls.sliderText}>
        <Typography.Text underline>{sliderValues[0]}</Typography.Text>
        <strong className={cls.sliderTextDash}>-</strong>
        <Typography.Text underline>{sliderValues[1]}</Typography.Text>
      </div>
      <Slider
        range={{ draggableTrack: true }}
        marks={marks}
        step={1}
        defaultValue={[18, 50]}
        max={80}
        className={cls.slider}
        onChange={onChangeSlider}
      />
    </div>
  );
};
