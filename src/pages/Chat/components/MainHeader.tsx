function MainHeader() {
    return(
        <div className="relative w-[381px] h-[91px] flex-shrink-1 flex bg-white items-center justify-center">
            <p className="text-center"
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