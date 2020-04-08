### useCallback

## **\_giống useMemo**

-Component Child sẽ luôn re-render khi Parent render, thậm chí Child là một PureComponent hoặc được bọc trong React.memo

- công dụng giúp kiêm soát dư thừa của các component con => truyền vào 1 tham số chỉ thay đổi khi tham số truyền vào thay đổi(thường là 1 event nào đó ex: onClick )

-Được sử dụng để chặn việc render không cần thiết giữa parent và children component

link :http://vuilaptrinh.com/2019-12-13-huong-dan-cai-thien-hieu-nang-react-component/
link: https://viblo.asia/p/cung-tim-hieu-ve-cac-hook-trong-react-hooks-Ljy5VYgjlra
