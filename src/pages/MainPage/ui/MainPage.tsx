import { BugButton } from 'app/providers/ErrorBoundory';
import { Counter } from 'entities/Counter';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = memo(() => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');
  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('Главная страница')}
      <Input value={value} onChange={onChange}  placeholder='Введите текст'/>
      <Counter />
    </div>
  );
});

export default MainPage;
