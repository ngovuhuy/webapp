;
import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";

ExpenseList

const Dashboard = () => {
const {expenses, error, isLoading} = useExpenses();
  return <div className="div">
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <ExpenseList expenses={expenses}/>
 
  </div>
};

export default Dashboard
// Cách tổ chức mã trong ví dụ thứ hai tốt hơn về mặt tái sử dụng mã (reusability) và phân tách trách nhiệm (separation of concerns), vì:
// 1. Tái sử dụng mã
// Ví dụ đầu tiên: Component ExpenseList tự quản lý dữ liệu expenses. Nếu bạn cần sử dụng ExpenseList với một bộ dữ liệu khác ở nơi khác, bạn phải sửa đổi trực tiếp trong component. Điều này làm giảm khả năng tái sử dụng.
// Ví dụ thứ hai: ExpenseList nhận dữ liệu expenses thông qua props, giúp bạn linh hoạt hơn trong việc truyền dữ liệu từ bất kỳ nguồn nào (API, mock data, hoặc state management như Redux). Component ExpenseList trở nên độc lập và tái sử dụng được.
// 2. Phân tách trách nhiệm
// Ví dụ đầu tiên: ExpenseList chịu trách nhiệm cả hiển thị (UI) và quản lý dữ liệu. Điều này khiến component trở nên không rõ ràng về mục đích của nó. Nếu dữ liệu thay đổi (ví dụ, cần fetch từ server), bạn phải chỉnh sửa logic bên trong ExpenseList.
// Ví dụ thứ hai: Phân tách nhiệm vụ giữa:
// Dashboard: quản lý dữ liệu (có thể fetch hoặc tạo danh sách dữ liệu) và truyền dữ liệu đó qua props.
// ExpenseList: chỉ chịu trách nhiệm hiển thị dữ liệu (UI).
// Kết luận
// Cách tổ chức thứ hai là cách làm tốt hơn, tuân thủ các nguyên tắc thiết kế component trong React. Nó giúp mã dễ bảo trì, mở rộng và tái sử dụng. Trong thực tế, dữ liệu thường được lấy từ API, nên việc phân tách dữ liệu ra khỏi component UI là cần thiết để tránh viết mã cứng nhắc (hardcoding).