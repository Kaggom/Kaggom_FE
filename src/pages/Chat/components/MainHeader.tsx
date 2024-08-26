function MainHeader() {
    return(
        <div className="flex w-[100%] h-[91px] flex-shrink-1  bg-white items-center justify-center">
            <p className="ml-[28px]"
                style={{
                    fontFamily: '"Rounded Mplus 1c Bold"',
                    fontSize: '30px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    background: 'linear-gradient(180deg, #80A1FF 0%, #395198 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                KAGGOM CHAT
            </p>
        </div>
    );
}
export default MainHeader;