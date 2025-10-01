interface Column {
  key: string;
  title: string;
  render?: (item: any) => React.ReactNode;
}

interface ScrollableDataTableProps {
  data: any[];
  columns: Column[];
  headerStyle?: ViewStyle;
  rowStyle?: ViewStyle;
}

const ScrollableDataTable: React.FC<ScrollableDataTableProps> = ({
  data,
  columns,
  headerStyle,
  rowStyle,
}) => {
  const renderRow = ({ item }: { item: any }) => (
    <View style={[{ flexDirection: "row" }, rowStyle]}>
      {columns.map((col) => (
        <View key={col.key} style={{ flex: 1 /* or custom widths */ }}>
          {col.render ? col.render(item) : <Text>{item[col.key]}</Text>}
        </View>
      ))}
    </View>
  );

  const renderHeader = () => (
    <View style={[{ flexDirection: "row", backgroundColor: "#eee" }, headerStyle]}>
      {columns.map((col) => (
        <View key={col.key} style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{col.title}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderRow}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={renderHeader}
      stickyHeaderIndices={[0]}  // makes header stay fixed while scrolling
      // You can also tweak other FlatList settings
    />
  );
};
