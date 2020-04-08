### useMemo

## **\_giống shouldComponentUpdate**

- useMemo giúp ta kiểm soát việc được render dư thừa của các component con, nó khá giống với hàm shouldComponentUpdate trong LifeCycle. Bằng cách truyền vào 1 tham số thứ 2 thì chỉ khi tham số này thay đổi thì thằng useMemo mới được thực thi.

## link: http://vuilaptrinh.com/2019-12-13-huong-dan-cai-thien-hieu-nang-react-component/

## link :https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853

## so sánh

Tên có vẻ giống, nhưng không giống nhau, nếu React.memo là một HOC để **_ghi nhớ một function component_**, useMemo là hàm giống như helper cho phép chỉ định: **_lưu lại kết quả của hàm nào và những giá trị nào sẽ làm thay đổi kết quả đó_**.
