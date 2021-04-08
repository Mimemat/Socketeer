import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
  useImperativeHandle,
  useEffect,
} from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Container, Header, List, ListContainer, ListItem } from './styles';

export interface IDropdownItem {
  value: string;
  label: string;
}

export interface IDropdownProps {
  items: IDropdownItem[];
  defaultValue?: number;
}

export interface IDropdownHandles {
  selected: IDropdownItem;
}

const Dropdown: React.ForwardRefRenderFunction<
  IDropdownHandles,
  IDropdownProps
> = ({ items, defaultValue }, ref) => {
  const [selectedItem, setSelectedItem] = useState<IDropdownItem>(
    items[defaultValue || 0]
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setSelectedItem(items[defaultValue || 0]);
  }, [defaultValue]);

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
      className="dropdown"
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
