import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
  useImperativeHandle,
} from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Container, Header, List, ListContainer, ListItem } from './styles';

interface IDropdownItem {
  value: string;
  label: string;
}

interface IDropdownProps {
  items: IDropdownItem[];
}

export interface IDropdownHandles {
  selected: IDropdownItem;
}

const Dropdown: React.ForwardRefRenderFunction<
  IDropdownHandles,
  IDropdownProps
> = ({ items }, ref) => {
  const [selectedItem, setSelectedItem] = useState<IDropdownItem>(items[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = useCallback(
    (newState?: boolean) => {
      setIsOpen(newState ?? !isOpen);
    },
    [isOpen]
  );

  const handleClick = useCallback((item: IDropdownItem) => {
    toggle();
    setSelectedItem(item);
  }, []);

  const restOfItems = useMemo(
    () => items.filter((item) => item.label !== selectedItem.label),
    [selectedItem]
  );

  useImperativeHandle(ref, () => ({
    selected: selectedItem,
  }));

  return (
    <Container
      tabIndex={0}
      onClick={() => toggle()}
      onBlur={() => toggle(false)}
    >
      <Header>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        {selectedItem.label}
      </Header>
      {isOpen && (
        <ListContainer>
          <List>
            {restOfItems.map((item, index) => (
              <ListItem key={index} onClick={() => handleClick(item)}>
                {item.label}
              </ListItem>
            ))}
          </List>
        </ListContainer>
      )}
    </Container>
  );
};

export default forwardRef(Dropdown);
