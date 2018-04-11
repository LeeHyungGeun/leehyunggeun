const iauditor = {
    issues: [ // category: 1: issue, 2: idea
        // 1.
        {
            title: `Region Selection`, // Region 선택 자동 선택 후 US East로 선택 됨.\n이것 때문에 동영상 재생 속도가 느린 것 같다.
            category: 1,
            body: `The Region of iAuditor in China and Australia is set as US East.<br />
                    I think because of the region issue, the network speed to connect on iAuditor was slow in China.
                    <br /><br />
                    In addition, I asked the issue to customer centre of SafetyCulture on iAuditor, and I got the feedback to reinstall the iAuditor,<br />
                    but it was same even I tried it in China and Australia by Chinese DNS(China Telecom) and Australia DNS(Optus).`,
            images: [
                '/images/1.region.png',
                '/images/1.region2.png',
            ]
        },
        // 6.
        {
            title: `Link Error`, // Help & Feedback의 링크들이 Not Found로 나온다.\n주소: https://support.safetyculture.com/article.php
            category: 1,
            body: `Links of the below images are No results found.<br />
            URL: <a href=" https://support.safetyculture.com/article.php">https://support.safetyculture.com/article.php</a>`,
            images: [
                '/images/6.link_error.png',
                '/images/6.link_error_page.png'
            ]
        },
        // 4.
        {
            title: `Change a Language`, // 언어 변경후 바로 반영되지 않고 앱을 종료후 다시 켜야 실행이 반영이된다.
            category: 1,
            body: `After change a language on iAuditor, the Language of iAuditor is not changed like the below image.<br />
            <br />
            It needs to shutdown the iAuditor, and open again.`,
            images: [
                '/images/4.language.png'
            ]
        },
        // 8.
        {
            title: `Email Validation`, // 이메일 형식 체크가 잘못 되었다.\n이메일@도메인 123@gmail 형식을 허용하지 않는다.\n그리고 그럼에도 저장은 된다.
            category: 2,
            body: `Email address can be used without DNS name. For example: leehyunggeun@safetyculture.<br />
            However, it is wanred if without DNS name (.com or .com.au).
            <br />
            Moreover, it can be saved like in the second picture.`,
            images: [
                '/images/8.email.png',
                '/images/8.email_saved.png'
            ]
        },
        // 2.
        {
            title: `Localization - Template Filter`, // 국가별 템플릿 검색을 하고 싶다.\n국가별로 Auditor하는 것이 다르기 때문에.
            category: 2,
            body: `In my opinion, even the same template of a same case, it can be different by the countries. <br />
            Safety Cultre is now looking for global market, and the customer is not only from one country and want to filter by the country.<br />
            Thus, I think if there has filter for country, it will be much better like the below image.
            <br /><br />
            In addition, in my experience of my previous company named LINE WORKS, they provided the service just in two countries: Korea and Japan, <br />
            but the required from the both countries are definitely different, even culture of two countries is similar.`,
            images: [
                '/images/2.select_country.png'
            ]
        },
        // 3.
        {
            title: `Localization - Template Multi Language`, // 템플릿 만들 때 다국어 기능을 추가하고 싶다.\n같은 템플릿 이어도 같은 회사 혹은 언어별로 쓰는 사람이 다르기 때문에.
            category: 2,
            body: `It is my idea related to the above No.5.<br />
            I think for the localization, we can add multi language form to create a template.
            <br /><br />
            However, first, it should be checked what is strategy to global market of SafetyCulture<br />
            because if add a language in a template, many functions of the iAuditor will be changed, and the cost of developing is high. <br />
            Also, most America companies,: Google or Facebook, make one type of product for the global. It means products are same in all countries, <br />
            but Korean company makes their products differently in different countries, and it made success in Asian market, even cost was too high.`
        },
        // 5.
        {
            title: `Localization - Template name`, // 국가별로 적절한 UI를 적용하고 싶다.\n예를들어 왼쪽 파란색 원에 첫 글자만 나오는데 한국인의 경험적으로 무슨 의미인지 알기 힘들다.
            category: 2,
            body: `In Korean, first character between every words has no meaning.<br />
            <br />
            In my previous company case, we added a keyword instead. `,
            images: [
                '/images/5.keyword.png'
            ]
        },
        // 7.
        {
            title: `Localization - Filter Sort by Title`, // 템플릿 필터에 한국어의 경우 제목(A-Z)혹은 제목(Z-A)가 맞지 않는 것 같다.
            category: 2,
            body: `In filter of title, there are (A-Z) and (Z-A) in Korean. I think it can change as their language.`,
            images: [
                '/images/7.sort_title_filter.png'
            ]
        },
        // 9.
        {
            title: `Improvement - Date Format Setting`, // 현재 날짜 형식에 시스템 설정 형식이라고만 나오는데\n현재 어떤 형식인지 확인해서 알려주면 더 좋을것 같다.
            category: 2,
            body: `In a setting of Date Format, there is 'System Default Date Format'.<br />
            I think if show what is date format of customer's OS, it can be much better.`,
            images: [
                '/images/9.date_format.png'
            ]
        },
        // 10.
        {
            title: `Improvement - Upload Public Library`, // 공용템플릿 업로드 후 뭔가 좀 더 확실하게 확인해 줬으면 좋겠다.
            category: 2,
            body: `If show a message after done uploaded, it can be much better.<br />
            In my case, I was not sure, it was done uploaded or not.`,
            images: [
                '/images/10.upload_public_library.png'
            ]
        },
    ]
};
export default iauditor;