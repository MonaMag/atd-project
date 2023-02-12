import React, { useState } from 'react';
import { Slider, Typography } from 'antd';
import cls from './SliderComponent.module.css';

interface SliderComponentProps {
    className?: string;
}

export const SliderComponent = ({ className }: SliderComponentProps) => {
    const [sliderValues, setSliderValues] = useState<number[]>([18, 50]);
    const onChangeSlider = (value: number[]) => {
        setSliderValues(value);
        console.log('SliderValues: ', value);
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
