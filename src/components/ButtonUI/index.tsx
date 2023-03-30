import * as React from 'react';
import Button from '@mui/material/Button';

type ButtonUIProps = {
  text: string,
}
export function ButtonIU(props: ButtonUIProps) {
  return <Button variant="contained">{props.text}</Button>;
}