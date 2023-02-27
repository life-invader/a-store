import { SelectResponsive } from '@alfalab/core-components/select/Component.responsive';
import type { SelectProps } from '@alfalab/core-components/select';
import type { ISelectProps } from './type';

export function Select({ options, label, onChange, name, selected }: ISelectProps) {
  const handleChange: SelectProps['onChange'] = (evt) => {
    evt.selected && onChange({ [name]: evt.selected });
  };

  return (
    <SelectResponsive
      allowUnselect={true}
      size="s"
      options={options}
      name={name}
      placeholder={label}
      label={label}
      labelView="outer"
      breakpoint={400}
      optionsListWidth="field"
      preventFlip={false}
      selected={selected}
      onChange={handleChange}
      visibleOptions={3}
      block={true}
    />
  );
}
