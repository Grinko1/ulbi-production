import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  const throwAnError = () => {
    setError(!error);
  };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
  return (
    <Button className={classNames('', {}, [className])} onClick={throwAnError}>
      throw Error
    </Button>
  );
};
