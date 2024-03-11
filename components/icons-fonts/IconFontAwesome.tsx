import FontAwesome from '@expo/vector-icons/FontAwesome';

interface IIconFont {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number;
  styleParams?: {};
}

export function IconFontAwesome({ name, color, size, styleParams }: IIconFont) {
  return <FontAwesome size={size} name={name} color={color} style={styleParams} />;
}
