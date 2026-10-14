'use strict';
// Vietnamese notes for the "Ask me something" box. Loaded by vi/index.html before retriever.js and app.js.
// Same ids, drawers and citations as the English kb in app.js; keys mix Vietnamese and the English terms people type.
window.CITE = 'nguồn';
window.RETRIEVER_TEXT = { back: 'đang cất lại', find: 'đang tìm ', hook: 'đang móc ', pull: 'đang kéo ', cited: ' trích dẫn', gap: ' · 1 chỗ trống', search: 'đang tìm…', none: 'không có nguồn · 0 trích dẫn' };
window.FALLBACK = {
  answer: 'Ghi chú của tôi không có gì về điều đó, nên tôi xin không trả lời thay vì bịa ra. Hãy thử một trong các câu sau.',
  file: 'không tìm thấy nguồn',
  source: '<span class="source-empty">Không có ngăn kéo nào khớp. Thiếu bằng chứng thì nói là thiếu.</span>'
};
window.KB = {
  talks: {
    chip: 'Bạn đã từng thuyết trình chưa?',
    drawer: 'build',
    keys: ['talks', 'pydata', 'speak', 'conference', 'meetup', 'agentops', 'thuyết trình', 'bài nói', 'hội thảo', 'diễn giả', 'trình bày'],
    answer: 'Có. Tháng 9 năm 2026, tôi trình bày tại PyData Lausanne: “AgentOps, tầng tiếp theo sau MLOps”.[1] Ý chính: mô hình là một hàm, bạn đánh phiên bản và rollback được, còn agent là một tiến trình: nó giữ trạng thái, gọi tool và tiêu tiền.[2] Vì vậy release, giám sát và rollback cần được nghĩ lại. <a href="talks/agentops-pydata-lausanne.html">Đọc tóm tắt</a>.',
    file: 'talks.md',
    source: `Bài nói

<mark data-n="1">PyData Lausanne, 24/09/2026: AgentOps, tầng tiếp theo sau MLOps.</mark>

<mark data-n="2">Mô hình là một hàm: đánh phiên bản, kiểm thử, rollback. Agent là một tiến trình: giữ trạng thái, gọi tool, tiêu tiền, thử lại.</mark>

Câu hỏi: đơn vị triển khai? release khi artifact không đổi? giám sát khi không có con số độ chính xác? rollback cho một vòng lặp gọi tool?`
  },
  build: {
    chip: 'Bạn xây dựng gì?',
    keys: ['build', 'who', 'job', 'role', 'xây dựng', 'làm gì', 'là ai', 'công việc', 'vai trò', 'nghề'],
    answer: 'Chủ yếu là AI agent, và mọi thứ cần để đưa chúng vào production: hạ tầng cloud để chạy chúng và các bài test phát hiện khi chúng sai.[1] Cho đến nay là cho nhà máy, phòng thí nghiệm và dây chuyền tự động hóa.[2]',
    file: 'about.md',
    source: `Andy Bermond. Kỹ sư AI agent & MLOps.

<mark data-n="1">Xây dựng agent, hạ tầng cloud để chạy chúng, và các bước kiểm tra phát hiện khi chúng sai.</mark>
Phụ trách cả chặng đường: mô hình hoặc agent, hạ tầng, kiểm thử.
Đã đưa agent, MLOps và computer vision vào vận hành, đến tận deployment và CI/CD.
Mọi khẳng định đều có nguồn. Không có nguồn, không khẳng định.

Lĩnh vực đến nay: <mark data-n="2">sản xuất, khoa học sự sống, tự động hóa</mark>.
Dự án phụ: robot.`
  },
  demo: {
    chip: 'Demo: chuyện gì xảy ra khi tài liệu không nói gì?',
    keys: ['demo', 'rag', 'retrieval', 'manufacturing', 'tài liệu', 'không nói', 'bồn', 'đổ đầy', 'trộn', 'xả', 'sản xuất', 'tri thức', 'truy xuất'],
    answer: 'Nó nói thẳng điều đó thay vì đoán. Lấy ví dụ quy trình hư cấu này: đổ đầy, trộn, xả. Hỏi sau bước đổ đầy là gì, câu trả lời là “trộn”.[1] Hỏi trộn trong bao lâu thì tài liệu không nói,[2] nên câu trả lời nói rõ như vậy. Đó cũng là nguyên tắc của trợ lý tri thức sản xuất mà tôi đã dẫn dắt phần kỹ thuật.',
    file: 'training-procedure.txt · hư cấu',
    source: `Quy trình đào tạo (hư cấu cho demo này): trộn nước

Bước 01: Đổ đầy bồn.
<mark data-n="1">Bước 02: Trộn hỗn hợp.</mark>
Bước 03: Xả bồn.

<mark class="gap" data-n="2">Thời gian trộn: không được chỉ định.</mark>
Điều kiện kết thúc xả: không được chỉ định.`
  },
  evals: {
    chip: 'Bạn kiểm thử agent như thế nào?',
    keys: ['eval', 'test', 'quality', 'grounding', 'hallucinat', 'kiểm thử', 'kiểm tra', 'đánh giá', 'chất lượng', 'ảo giác', 'sai', 'đo lường'],
    answer: 'Tôi so kết quả với điều người dùng thực sự yêu cầu.[1] Một agent có thể gọi mọi tool đúng cách mà vẫn đặt cho bạn chuyến tàu muộn hàng giờ.[2] Vì vậy kết quả được kiểm tra trước; test tất định, bộ dữ liệu eval và trace sau đó cho thấy chỗ hỏng.[3]',
    file: 'notes/agent-evaluation.md',
    source: `Gọi tool đúng ≠ xong việc.

<mark data-n="1">Thêm bước kiểm tra kết quả bên cạnh kiểm tra việc dùng tool và grounding.</mark>

Demo lập kế hoạch hành trình:
<mark data-n="2">người dùng muốn một chuyến tàu tối muộn, agent đặt chuyến muộn hơn vài tiếng. Mọi lần gọi tool đều hợp lệ. Vẫn sai. Bộ kiểm tra so giờ đã đặt với giờ được yêu cầu.</mark>

Bộ công cụ:
<mark data-n="3">kiểm tra tất định, bộ dữ liệu eval, xem lại trace, quality gate gọi tên hành vi lỗi.</mark>`
  },
  vision: {
    chip: 'Kể về hệ thống đếm linh kiện.',
    keys: ['count', 'vision', 'gcp', 'camera', 'flash', 'google cloud', 'đếm', 'đồng hồ', 'hình ảnh', 'ảnh', 'thị giác máy tính', 'linh kiện'],
    answer: 'Một nhà sản xuất đồng hồ cần đếm các linh kiện nhỏ được chụp dưới đèn flash. Tôi viết thuật toán đếm, và việc đếm trở nên nhanh hơn, chính xác hơn.[1] Tôi cũng xây dựng backend, bảo mật, deployment và CI/CD xung quanh nó.[2] Hạ tầng GCP được thiết kế để mở rộng từ vài máy lên hàng nghìn máy. Đó là mục tiêu thiết kế; tôi chưa đo một hệ thống lớn như vậy.[3]',
    file: 'projects/flash-to-count.md',
    source: `Computer vision, ngành đồng hồ.

<mark data-n="1">Thuật toán đếm cho nhiều loại linh kiện đồng hồ, chụp dưới đèn flash. Kết quả: đếm nhanh hơn, chính xác hơn.</mark>

Cũng do tôi làm:
<mark data-n="2">backend ứng dụng, lớp bảo mật, kiến trúc deployment, CI/CD.</mark>

<mark data-n="3">GCP + API management cho từ vài máy đến hàng nghìn máy. Mục tiêu thiết kế, chưa đo.</mark>`
  },
  cloud: {
    chip: 'Bạn triển khai agent như thế nào?',
    keys: ['cloud', 'deploy', 'infra', 'architecture', 'security', 'release', 'ci', 'kubernetes', 'docker', 'triển khai', 'hạ tầng', 'kiến trúc', 'bảo mật', 'phát hành', 'vận hành'],
    answer: 'Đăng nhập và lớp API management trước, để không gì đến được agent khi chưa có quyền.[1] Agent chạy trong container và lưu file bên ngoài, nên khởi động lại không mất gì.[2] Mỗi release là một image có phiên bản mà tôi có thể rollback.[3] Và tôi theo dõi những gì agent quyết định, chứ không chỉ việc server có chạy hay không.[4]',
    file: 'notes/reference-architecture.md · khái niệm',
    source: `Thiết kế tham chiếu. Không phải hệ thống của khách hàng nào.

<mark data-n="1">Người dùng → đăng nhập → API management → backend. Quyền truy cập có giới hạn.</mark>

<mark data-n="2">Workflow trong container. Tài liệu và artifact của lần chạy nằm ở bộ nhớ lâu dài: khởi động lại ≠ mất dữ liệu.</mark>

<mark data-n="3">Commit → test → image → staging → release. Giữ phiên bản trước để rollback.</mark>

<mark data-n="4">Giám sát dịch vụ (lỗi, độ trễ, uptime) và agent (lần gọi tool, bằng chứng, kết quả, token).</mark>`
  },
  science: {
    chip: 'Bạn đã làm gì cho science agent?',
    keys: ['science', 'research', 'hypothes', 'lab', 'pharma', 'khoa học', 'nghiên cứu', 'giả thuyết', 'phòng thí nghiệm', 'sinh học', 'dược'],
    answer: 'Tôi phụ trách deployment và bảo mật workload cho một science agent do cả nhóm xây dựng, gồm cả quy trình release.[1] Điều tôi rút ra: giữ điều đã đo tách biệt với điều được đoán.[2] Nếu một mẫu không có số đo cuối, agent nên nói “chưa thể so sánh”.[3]',
    file: 'projects/science-agent.md',
    source: `Science agent. Dự án nhóm.

<mark data-n="1">Phần của tôi: quy trình deployment và release, cấu hình bảo mật workload.</mark>

<mark data-n="2">Chỉ hữu ích khi quan sát, diễn giải và điều chưa biết được tách biệt.</mark>

Ví dụ hư cấu: hai ghi chú, hai điều kiện.
<mark data-n="3">Chỉ một bên có số đo cuối, nên đánh dấu phép so sánh còn thiếu thay vì bịa ra kết quả.</mark>`
  },
  mlops: {
    chip: 'Còn MLOps và drift thì sao?',
    keys: ['mlops', 'drift', 'pipeline', 'data', 'tiltmeter', 'monitor', 'machine learning', 'model', 'mô hình', 'dữ liệu', 'độ tin cậy', 'giám sát', 'học máy'],
    answer: 'Trước khi làm agent, tôi xây dựng pipeline MLOps, nghiên cứu về data drift và làm rất nhiều QA cho ứng dụng ML.[1] Tiltmeter là dự án mã nguồn mở tiếp nối của tôi. Nó theo dõi sự thay đổi xác suất và ngưỡng quyết định.[2]',
    file: 'notes/ml-reliability.md',
    source: `Độ tin cậy bắt đầu trước khi deploy.

<mark data-n="1">Xây dựng pipeline MLOps. Nghiên cứu phát hiện data drift. Rất nhiều QA cho frontend và hệ thống ML.</mark>

Giao diện chạy, dịch vụ ổn, mô hình đã trả lời: ba khẳng định khác nhau.

<mark data-n="2">Tiltmeter (mã nguồn mở, Python): thay đổi xác suất, thay đổi mô hình, ngưỡng quyết định.</mark>
github.com/abe75ch/tiltmeter`
  },
  explore: {
    chip: 'Bạn đang tìm hiểu gì?',
    keys: ['robot', 'edge', 'wearable', 'tìm hiểu', 'khám phá', 'thiết bị', 'pin', 'thiết bị đeo', 'sở thích', 'tiếp theo'],
    answer: 'Robot.[1] Và các mô hình nhỏ chạy bằng pin nhỏ. Trong một dự án ML cho thiết bị đeo, tôi thu thập mẫu và đo mức tiêu hao pin.[2]',
    file: 'notes/bench.md',
    source: `Đang thử nghiệm:
<mark data-n="1">robot, hệ thống vật lý.</mark>

Edge ML. Tính khả thi trên thiết bị đeo: xử lý cảm biến, đánh giá mô hình, định dạng xuất, mức tiêu thụ năng lượng.
<mark data-n="2">Thu thập mẫu và đo pin.</mark>`
  },
  contact: {
    chip: 'Liên hệ với bạn bằng cách nào?',
    keys: ['contact', 'email', 'mail', 'linkedin', 'github', 'cv', 'liên hệ', 'liên lạc'],
    answer: 'Email là nhanh nhất: <a href="mailto:andy.bermond75@gmail.com">andy.bermond75@gmail.com</a>.[1] Tôi cũng có trên <a href="https://www.linkedin.com/in/andy-bermond" target="_blank" rel="noopener noreferrer">LinkedIn</a>,[2] và mã nguồn của tôi ở trên <a href="https://github.com/abe75ch" target="_blank" rel="noopener noreferrer">GitHub</a>.[3]',
    file: 'links.txt',
    source: `<mark data-n="1">andy.bermond75@gmail.com</mark>
<mark data-n="2">linkedin.com/in/andy-bermond</mark>
<mark data-n="3">github.com/abe75ch</mark>`
  }
};
